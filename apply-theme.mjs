import fs from 'fs';
import path from 'path';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('c:/lexavant/src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // In Hero.tsx we want to change hero4.mp4 to hero.mp4
    if (file.includes('Hero.tsx')) {
        const newContent = content.replace('hero4.mp4', 'hero.mp4');
        if (newContent !== content) {
            content = newContent;
            modified = true;
        }
    }

    // Nav.tsx logic
    if (file.includes('Nav.tsx')) {
        const r1 = content.replace(/const isDarkBg = isHome \|\| !scrolled;/g, 'const isDarkBg = true;');
        const r2 = r1.replace(/bg-bone\/90/g, 'bg-ink/90');
        const r3 = r2.replace(/border-ink\/10/g, 'border-bone/10');
        const r4 = r3.replace(/bg-bone border border-ink\/10/g, 'bg-ink border border-bone/10');
        const r5 = r4.replace(/text-ink\/80 hover:bg-ink\/5 hover:text-ink/g, 'text-bone/80 hover:bg-bone/10 hover:text-bone');
        const r6 = r5.replace(/bg-bone border-t border-ink\/10/g, 'bg-ink border-t border-bone/10');
        if (r6 !== content) {
            content = r6;
            modified = true;
        }
    }

    // For all other files, apply the global swap
    if (!file.includes('Nav.tsx') && !file.includes('Hero.tsx')) {
        let newContent = content.replace(/bg-bone/g, 'bg-ink');
        newContent = newContent.replace(/text-ink/g, 'text-bone');
        newContent = newContent.replace(/border-ink/g, 'border-bone');
        newContent = newContent.replace(/decoration-ink/g, 'decoration-bone');
        if (newContent !== content) {
            content = newContent;
            modified = true;
        }
    }

    if (modified) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated: ${file}`);
    }
});
