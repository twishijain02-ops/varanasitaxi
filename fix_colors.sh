#!/bin/bash
# Replace orange colors with monochrome alternatives

for file in src/components/*.tsx src/App.tsx; do
  # Backgrounds
  sed -i 's/bg-saffron-600/bg-gray-800/g' "$file"
  sed -i 's/bg-saffron\/10/bg-gray-100/g' "$file"
  sed -i 's/bg-saffron\/50/bg-gray-500/g' "$file"
  sed -i 's/bg-saffron/bg-black/g' "$file"
  
  # Borders, fills, accents
  sed -i 's/border-saffron/border-black/g' "$file"
  sed -i 's/fill-saffron/fill-black/g' "$file"
  sed -i 's/accent-saffron/accent-black/g' "$file"
  sed -i 's/focus:ring-saffron/focus:ring-black/g' "$file"

  # Text - handle specific dark mode components first
  if [[ "$file" == *"Packages.tsx"* || "$file" == *"Footer.tsx"* ]]; then
    sed -i 's/text-saffron-600/text-gray-300/g' "$file"
    sed -i 's/text-saffron/text-white/g' "$file"
    sed -i 's/hover:text-saffron/hover:text-white/g' "$file"
  else
    sed -i 's/text-saffron-600/text-gray-600/g' "$file"
    sed -i 's/text-saffron/text-black/g' "$file"
    sed -i 's/hover:text-saffron/hover:text-black/g' "$file"
  fi
done

# Specific fix for WhyChooseUs icon (dark background on icon container)
sed -i 's/bg-navy text-black/bg-black text-white/g' src/components/WhyChooseUs.tsx
sed -i 's/bg-navy text-saffron/bg-black text-white/g' src/components/WhyChooseUs.tsx

# Specific fix for HowItWorks icon
sed -i 's/bg-black text-navy/bg-black text-white/g' src/components/HowItWorks.tsx

# Specific fix for whatsapp bg
sed -i 's/bg-whatsapp-600/bg-gray-800/g' src/components/*.tsx
sed -i 's/bg-whatsapp/bg-black/g' src/components/*.tsx
sed -i 's/text-whatsapp/text-black/g' src/components/*.tsx
sed -i 's/hover:text-whatsapp/hover:text-black/g' src/components/*.tsx
sed -i 's/bg-whatsapp\/10/bg-gray-100/g' src/components/*.tsx
