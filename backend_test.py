#!/usr/bin/env python3
"""
Backend API Testing Script for Raw Visual Studio
Tests the preset API endpoints to verify functionality
"""

import requests
import json
import sys
from typing import Dict, Any, List

# Get backend URL from environment
BACKEND_URL = "https://ff749ae1-ba3d-4785-a4b3-d5ff5653e5b5.preview.emergentagent.com/api"

def test_api_endpoint(method: str, endpoint: str, expected_status: int = 200, data: Dict = None) -> Dict[str, Any]:
    """Test an API endpoint and return results"""
    url = f"{BACKEND_URL}{endpoint}"
    
    try:
        if method.upper() == "GET":
            response = requests.get(url, timeout=10)
        elif method.upper() == "POST":
            response = requests.post(url, json=data, timeout=10)
        else:
            return {"success": False, "error": f"Unsupported method: {method}"}
        
        result = {
            "success": response.status_code == expected_status,
            "status_code": response.status_code,
            "url": url,
            "method": method.upper()
        }
        
        if response.status_code == 200:
            try:
                result["data"] = response.json()
            except json.JSONDecodeError:
                result["data"] = response.text
        else:
            result["error"] = response.text
            
        return result
        
    except requests.exceptions.RequestException as e:
        return {
            "success": False,
            "error": str(e),
            "url": url,
            "method": method.upper()
        }

def validate_preset_structure(preset: Dict[str, Any]) -> List[str]:
    """Validate preset data structure and return any issues"""
    issues = []
    required_fields = ["id", "name", "description", "price", "type", "preview_image", "file_count", "compatibility"]
    
    for field in required_fields:
        if field not in preset:
            issues.append(f"Missing required field: {field}")
    
    # Validate specific field types and values
    if "price" in preset and not isinstance(preset["price"], (int, float)):
        issues.append(f"Price should be numeric, got: {type(preset['price'])}")
    
    if "type" in preset and preset["type"] not in ["preset", "lut"]:
        issues.append(f"Invalid type: {preset['type']}, should be 'preset' or 'lut'")
    
    if "file_count" in preset and not isinstance(preset["file_count"], int):
        issues.append(f"File count should be integer, got: {type(preset['file_count'])}")
    
    if "compatibility" in preset and not isinstance(preset["compatibility"], list):
        issues.append(f"Compatibility should be list, got: {type(preset['compatibility'])}")
    
    return issues

def test_preset_endpoints():
    """Test all preset API endpoints"""
    print("🧪 TESTING PRESET API ENDPOINTS")
    print("=" * 50)
    
    test_results = []
    
    # Test 1: GET /api/presets - Get all presets
    print("\n1️⃣ Testing GET /api/presets (Get all presets)")
    result = test_api_endpoint("GET", "/presets")
    test_results.append(("GET /api/presets", result))
    
    if result["success"]:
        presets = result["data"]
        print(f"✅ Success: Retrieved {len(presets)} presets")
        
        # Validate each preset structure
        for i, preset in enumerate(presets):
            issues = validate_preset_structure(preset)
            if issues:
                print(f"⚠️  Preset {i+1} structure issues: {', '.join(issues)}")
            else:
                print(f"✅ Preset {i+1}: {preset.get('name', 'Unknown')} - ${preset.get('price', 'N/A')} - {preset.get('file_count', 'N/A')} files")
        
        # Check for expected presets
        preset_names = [p.get('name', '') for p in presets]
        if "Cinematic Dreams Pack" in preset_names:
            print("✅ Found Cinematic Dreams Pack")
        else:
            print("❌ Missing Cinematic Dreams Pack")
            
        if "Blue Hour LUT Collection" in preset_names:
            print("✅ Found Blue Hour LUT Collection")
        else:
            print("❌ Missing Blue Hour LUT Collection")
    else:
        print(f"❌ Failed: {result.get('error', 'Unknown error')}")
    
    # Test 2: GET /api/presets/preset-pack-001 - Get Cinematic Dreams Pack
    print("\n2️⃣ Testing GET /api/presets/preset-pack-001 (Cinematic Dreams Pack)")
    result = test_api_endpoint("GET", "/presets/preset-pack-001")
    test_results.append(("GET /api/presets/preset-pack-001", result))
    
    if result["success"]:
        preset = result["data"]
        print(f"✅ Success: Retrieved preset '{preset.get('name', 'Unknown')}'")
        
        # Validate specific requirements
        if preset.get("price") == 20.0:
            print("✅ Price is $20.00")
        else:
            print(f"❌ Price is ${preset.get('price', 'N/A')}, expected $20.00")
            
        if preset.get("file_count") == 25:
            print("✅ File count is 25")
        else:
            print(f"❌ File count is {preset.get('file_count', 'N/A')}, expected 25")
            
        if preset.get("type") == "preset":
            print("✅ Type is 'preset'")
        else:
            print(f"❌ Type is '{preset.get('type', 'N/A')}', expected 'preset'")
            
        # Check preview image URL
        preview_url = preset.get("preview_image", "")
        if preview_url and preview_url.startswith("http"):
            print(f"✅ Preview image URL: {preview_url}")
        else:
            print(f"❌ Invalid preview image URL: {preview_url}")
            
        # Check compatibility array
        compatibility = preset.get("compatibility", [])
        if isinstance(compatibility, list) and len(compatibility) > 0:
            print(f"✅ Compatibility: {', '.join(compatibility)}")
        else:
            print(f"❌ Invalid compatibility array: {compatibility}")
    else:
        print(f"❌ Failed: {result.get('error', 'Unknown error')}")
    
    # Test 3: GET /api/presets/lut-pack-001 - Get Blue Hour LUT Collection
    print("\n3️⃣ Testing GET /api/presets/lut-pack-001 (Blue Hour LUT Collection)")
    result = test_api_endpoint("GET", "/presets/lut-pack-001")
    test_results.append(("GET /api/presets/lut-pack-001", result))
    
    if result["success"]:
        preset = result["data"]
        print(f"✅ Success: Retrieved LUT '{preset.get('name', 'Unknown')}'")
        
        # Validate specific requirements
        if preset.get("price") == 20.0:
            print("✅ Price is $20.00")
        else:
            print(f"❌ Price is ${preset.get('price', 'N/A')}, expected $20.00")
            
        if preset.get("file_count") == 15:
            print("✅ File count is 15")
        else:
            print(f"❌ File count is {preset.get('file_count', 'N/A')}, expected 15")
            
        if preset.get("type") == "lut":
            print("✅ Type is 'lut'")
        else:
            print(f"❌ Type is '{preset.get('type', 'N/A')}', expected 'lut'")
            
        # Check preview image URL
        preview_url = preset.get("preview_image", "")
        if preview_url and preview_url.startswith("http"):
            print(f"✅ Preview image URL: {preview_url}")
        else:
            print(f"❌ Invalid preview image URL: {preview_url}")
            
        # Check compatibility array
        compatibility = preset.get("compatibility", [])
        if isinstance(compatibility, list) and len(compatibility) > 0:
            print(f"✅ Compatibility: {', '.join(compatibility)}")
        else:
            print(f"❌ Invalid compatibility array: {compatibility}")
    else:
        print(f"❌ Failed: {result.get('error', 'Unknown error')}")
    
    # Test 4: GET /api/presets/type/preset - Get only presets
    print("\n4️⃣ Testing GET /api/presets/type/preset (Get only presets)")
    result = test_api_endpoint("GET", "/presets/type/preset")
    test_results.append(("GET /api/presets/type/preset", result))
    
    if result["success"]:
        presets = result["data"]
        print(f"✅ Success: Retrieved {len(presets)} preset(s)")
        
        # Validate all returned items are presets
        all_presets = all(p.get("type") == "preset" for p in presets)
        if all_presets:
            print("✅ All returned items are type 'preset'")
        else:
            print("❌ Some returned items are not type 'preset'")
            
        # Check for Cinematic Dreams Pack
        preset_names = [p.get('name', '') for p in presets]
        if "Cinematic Dreams Pack" in preset_names:
            print("✅ Found Cinematic Dreams Pack in preset filter")
        else:
            print("❌ Missing Cinematic Dreams Pack in preset filter")
    else:
        print(f"❌ Failed: {result.get('error', 'Unknown error')}")
    
    # Test 5: GET /api/presets/type/lut - Get only LUTs
    print("\n5️⃣ Testing GET /api/presets/type/lut (Get only LUTs)")
    result = test_api_endpoint("GET", "/presets/type/lut")
    test_results.append(("GET /api/presets/type/lut", result))
    
    if result["success"]:
        luts = result["data"]
        print(f"✅ Success: Retrieved {len(luts)} LUT(s)")
        
        # Validate all returned items are LUTs
        all_luts = all(p.get("type") == "lut" for p in luts)
        if all_luts:
            print("✅ All returned items are type 'lut'")
        else:
            print("❌ Some returned items are not type 'lut'")
            
        # Check for Blue Hour LUT Collection
        lut_names = [p.get('name', '') for p in luts]
        if "Blue Hour LUT Collection" in lut_names:
            print("✅ Found Blue Hour LUT Collection in LUT filter")
        else:
            print("❌ Missing Blue Hour LUT Collection in LUT filter")
    else:
        print(f"❌ Failed: {result.get('error', 'Unknown error')}")
    
    # Summary
    print("\n" + "=" * 50)
    print("📊 TEST SUMMARY")
    print("=" * 50)
    
    passed = sum(1 for _, result in test_results if result["success"])
    total = len(test_results)
    
    print(f"Tests Passed: {passed}/{total}")
    
    for test_name, result in test_results:
        status = "✅ PASS" if result["success"] else "❌ FAIL"
        print(f"{status} - {test_name}")
        if not result["success"]:
            print(f"    Error: {result.get('error', 'Unknown error')}")
    
    return test_results

if __name__ == "__main__":
    print("🚀 Starting Raw Visual Studio Backend API Tests")
    print(f"Backend URL: {BACKEND_URL}")
    
    try:
        test_results = test_preset_endpoints()
        
        # Exit with appropriate code
        all_passed = all(result["success"] for _, result in test_results)
        sys.exit(0 if all_passed else 1)
        
    except Exception as e:
        print(f"❌ Test execution failed: {str(e)}")
        sys.exit(1)