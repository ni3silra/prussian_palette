import os

files_to_edit = ['index.html', 'about.html', 'shop.html', 'connect.html']

for file in files_to_edit:
    if os.path.exists(file):
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Add dark class to html tag
        content = content.replace('<html lang="en" class="scroll-smooth">', '<html lang="en" class="scroll-smooth dark">')
        
        # Fix style tag for Tailwind
        content = content.replace('<style>', '<style type="text/tailwindcss">')
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file}")
