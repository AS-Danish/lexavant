import sys
try:
    from PIL import Image
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image
import colorsys

img_path = r"C:\Users\asdan\.gemini\antigravity-ide\brain\0106a39d-831c-494d-9174-56a6bc3bf4a6\media__1784534938684.png"
img = Image.open(img_path).convert("RGBA")

pixels = img.load()
width, height = img.size

target_hue = 0.085 

# Find bounding box of non-dark pixels to crop the image
min_x, min_y = width, height
max_x, max_y = 0, 0

for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        if a == 0:
            continue
            
        # Make dark pixels (background sky and building silhouettes) completely transparent
        if r < 15 and g < 15 and b < 15:
            pixels[x, y] = (0, 0, 0, 0)
            continue
            
        # Update bounding box since this is a colored light (part of a building)
        if x < min_x: min_x = x
        if x > max_x: max_x = x
        if y < min_y: min_y = y
        if y > max_y: max_y = y

        h, s, v = colorsys.rgb_to_hsv(r/255.0, g/255.0, b/255.0)
        
        # Recolor lights to orange
        if v > 0.15:
            new_h = target_hue + (h * 0.03)
            new_r, new_g, new_b = colorsys.hsv_to_rgb(new_h, s, v)
            pixels[x, y] = (int(new_r * 255), int(new_g * 255), int(new_b * 255), a)

# Crop the image to just the buildings (removing excess transparent sky)
# Add a small padding
padding = 10
crop_box = (
    max(0, min_x - padding),
    max(0, min_y - padding),
    min(width, max_x + padding),
    min(height, max_y + padding)
)

if min_x <= max_x and min_y <= max_y:
    img = img.crop(crop_box)

img.save(r"c:\lexavant\src\assets\glowing-skyline.png")
print("Image background made transparent, cropped, and elegantly recolored.")
