#!/bin/bash

# Create the public directory if it doesn't exist
mkdir -p public

# Download hero background image
curl -o public/background.jpg "https://source.unsplash.com/1600x900/?construction,building"

# Download service images
curl -o public/residential.jpg "https://source.unsplash.com/800x600/?construction,team"
curl -o public/commercial.jpg "https://source.unsplash.com/800x600/?construction,quality"
curl -o public/infrastructure.jpg "https://source.unsplash.com/800x600/?construction,delivery"

# Download placeholder images
curl -o public/office-complex.jpg https://source.unsplash.com/800x600/?modern,office
curl -o public/residential-tower.jpg https://source.unsplash.com/800x600/?apartment,tower
curl -o public/bridge-project.jpg https://source.unsplash.com/800x600/?bridge,construction
curl -o public/mall-complex.jpg https://source.unsplash.com/800x600/?mall,shopping
curl -o public/eco-housing.jpg https://source.unsplash.com/800x600/?eco,house
curl -o public/metro-station.jpg https://source.unsplash.com/800x600/?metro,station 