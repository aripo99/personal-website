"use server";

import fs from 'fs';
import path from 'path';

export default async function getBlog(id: string) {
    const filePath = path.join(process.cwd(), `blog/${id}.md`);
    const markdown = fs.readFileSync(filePath, 'utf-8');
    return { markdown };
}