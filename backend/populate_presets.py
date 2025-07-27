#!/usr/bin/env python3
"""
Script to populate the database with sample preset and LUT data
"""
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path

# Load environment variables
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

sample_presets = [
    {
        "id": "preset-pack-001",
        "name": "Cinematic Dreams Pack",
        "description": "Professional color grading presets inspired by blockbuster movies. Transform your photos with warm, cinematic tones that add depth and emotion to every shot. Perfect for portrait photography, lifestyle shoots, and artistic storytelling.",
        "price": 20.0,
        "type": "preset",
        "preview_image": "https://images.unsplash.com/photo-1499078265944-8f1ee6f177a9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHByZXNldHN8ZW58MHx8fGJsdWV8MTc1MzYyNzU0NHww&ixlib=rb-4.1.0&q=85",
        "preview_images": [
            "https://images.unsplash.com/photo-1499078265944-8f1ee6f177a9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHByZXNldHN8ZW58MHx8fGJsdWV8MTc1MzYyNzU0NHww&ixlib=rb-4.1.0&q=85",
            "https://images.unsplash.com/photo-1573584757175-3b506e256b35?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxwaG90b2dyYXBoeSUyMHByZXNldHN8ZW58MHx8fGJsdWV8MTc1MzYyNzU0NXww&ixlib=rb-4.1.0&q=85"
        ],
        "file_count": 25,
        "compatibility": ["Lightroom CC", "Lightroom Classic", "Camera Raw", "Luminar"],
        "featured": True
    },
    {
        "id": "lut-pack-001", 
        "name": "Blue Hour LUT Collection",
        "description": "Cinematic color lookup tables designed for video professionals. Create stunning blue hour atmospheres, moody night scenes, and dramatic cinematic looks. These LUTs have been used in award-winning productions and will elevate your video content to professional standards.",
        "price": 20.0,
        "type": "lut",
        "preview_image": "https://images.unsplash.com/photo-1580216812795-686314ad9198?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBsdXRzfGVufDB8fHxibHVlfDE3NTM2Mjc1NTB8MA&ixlib=rb-4.1.0&q=85",
        "preview_images": [
            "https://images.unsplash.com/photo-1580216812795-686314ad9198?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBsdXRzfGVufDB8fHxibHVlfDE3NTM2Mjc1NTB8MA&ixlib=rb-4.1.0&q=85",
            "https://images.unsplash.com/photo-1532518171289-5e46a269e127?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxjaW5lbWF0aWMlMjBsdXRzfGVufDB8fHxibHVlfDE3NTM2Mjc1NTB8MA&ixlib=rb-4.1.0&q=85"
        ],
        "file_count": 15,
        "compatibility": ["DaVinci Resolve", "Final Cut Pro", "Premiere Pro", "After Effects"],
        "featured": True
    }
]

async def populate_database():
    """Populate database with sample preset data"""
    try:
        # Clear existing presets
        await db.presets.delete_many({})
        print("Cleared existing presets")
        
        # Insert sample presets
        for preset in sample_presets:
            await db.presets.insert_one(preset)
            print(f"Added {preset['name']}")
        
        print(f"Successfully added {len(sample_presets)} presets to the database")
        
        # Verify the data
        count = await db.presets.count_documents({})
        print(f"Total presets in database: {count}")
        
    except Exception as e:
        print(f"Error populating database: {e}")
    finally:
        client.close()

if __name__ == "__main__":
    asyncio.run(populate_database())