const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

const blogsDir = path.join(__dirname, 'public', 'Blogs');
const outputFile = path.join(__dirname, 'lib', 'journal.js');

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

async function buildJournal() {
  const journals = [];
  const folders = fs.readdirSync(blogsDir).filter(f => fs.statSync(path.join(blogsDir, f)).isDirectory());

  for (const folder of folders) {
    const folderPath = path.join(blogsDir, folder);
    const files = fs.readdirSync(folderPath);

    const docFile = files.find(f => f.endsWith('.docx'));
    const imageFile = files.find(f => f.endsWith('.jfif') || f.endsWith('.png') || f.endsWith('.jpg'));

    if (!docFile) continue;

    const docPath = path.join(folderPath, docFile);
    const title = docFile.replace('.docx', '');
    const slug = slugify(title);
    
    // Extract HTML
    const result = await mammoth.convertToHtml({path: docPath});
    const html = result.value; 
    
    // Simple summary: strip tags and grab first 120 chars
    const textContent = html.replace(/<[^>]*>?/gm, '');
    const summary = textContent.length > 150 ? textContent.substring(0, 150).trim() + '...' : textContent;

    journals.push({
      id: folder.toLowerCase().replace(' ', '-'),
      slug,
      title,
      date: 'July 2026', // Placeholder date
      coverImage: imageFile ? `/Blogs/${folder}/${imageFile}` : '',
      summary,
      contentHtml: html
    });
  }

  const jsContent = `// Auto-generated from Word documents\nexport const journals = ${JSON.stringify(journals, null, 2)};\n`;
  fs.writeFileSync(outputFile, jsContent);
  console.log('Successfully generated lib/journal.js');
}

buildJournal().catch(console.error);
