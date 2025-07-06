from PIL import Image
import numpy as np
from collections import Counter

# Load the image
img = Image.open("images/logo.png").convert('RGB')
img = img.resize((100, 100))  # Resize for faster processing

# Get all pixels as a list of tuples
pixels = np.array(img).reshape(-1, 3)
pixels = [tuple(pixel) for pixel in pixels]

# Find the most common color
most_common = Counter(pixels).most_common(1)[0][0]
hex_color = '#%02x%02x%02x' % most_common

print("Dominant color (hex):", hex_color)
