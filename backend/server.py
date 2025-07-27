from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime
from enum import Enum


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class PresetType(str, Enum):
    PRESET = "preset"
    LUT = "lut"

class Preset(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    description: str
    price: float
    type: PresetType
    preview_image: str
    preview_images: List[str] = []
    file_count: int
    compatibility: List[str] = []
    created_at: datetime = Field(default_factory=datetime.utcnow)
    featured: bool = False

class PresetCreate(BaseModel):
    name: str
    description: str
    price: float
    type: PresetType
    preview_image: str
    preview_images: List[str] = []
    file_count: int
    compatibility: List[str] = []
    featured: bool = False

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Preset Routes
@api_router.get("/presets", response_model=List[Preset])
async def get_presets():
    """Get all presets and LUTs"""
    presets = await db.presets.find().to_list(1000)
    return [Preset(**preset) for preset in presets]

@api_router.get("/presets/{preset_id}", response_model=Preset)
async def get_preset(preset_id: str):
    """Get specific preset by ID"""
    preset = await db.presets.find_one({"id": preset_id})
    if not preset:
        raise HTTPException(status_code=404, detail="Preset not found")
    return Preset(**preset)

@api_router.post("/presets", response_model=Preset)
async def create_preset(preset: PresetCreate):
    """Create a new preset/LUT"""
    preset_dict = preset.dict()
    preset_obj = Preset(**preset_dict)
    await db.presets.insert_one(preset_obj.dict())
    return preset_obj

@api_router.get("/presets/type/{preset_type}", response_model=List[Preset])
async def get_presets_by_type(preset_type: PresetType):
    """Get presets filtered by type (preset or lut)"""
    presets = await db.presets.find({"type": preset_type.value}).to_list(1000)
    return [Preset(**preset) for preset in presets]

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
