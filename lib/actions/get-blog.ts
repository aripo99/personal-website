"use server";

import fs from 'fs';

export default async function getBlog(id: string) {
    const path = `blog/${id}.md`;
    const markdown = fs.readFileSync(path, 'utf-8');
    return { markdown };
}