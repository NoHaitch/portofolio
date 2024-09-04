import fs from "fs";
import matter from "gray-matter";
import path from "path";

const rootDirectory = path.join(process.cwd(), 'src', 'content', 'projects')

export type Project = {
    metadata: ProjectMetadata
    content: string
}

export type ProjectMetadata = {
    title?: string
    description?: string
    image?: string
    author?: string
    publishedAt?: string
    repository?: string
    techUsed?: string[]
    slug: string
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
    try {
        const filePath = path.join(rootDirectory, `${slug}.mdx`)
        const fileContents = fs.readFileSync(filePath, { encoding: 'utf-8' })
        const { data, content } = matter(fileContents)
        
        return { metadata: { ...data, slug }, content }

    } catch (error) {
        return null
    }
}

export async function getProjects(limit?: number): Promise<ProjectMetadata[]> {
    const files = fs.readdirSync(rootDirectory)

    const posts = files
        .map(file => getProjectMetadata(file))
        .sort((a, b) => {
            if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
                return 1
            } else {
                return -1
            }
        })

    if (limit) {
        return posts.slice(0, limit)
    }

    return posts
}


export function getProjectMetadata(filepath: string): ProjectMetadata {
    const slug = filepath.replace(/\.mdx$/, '')
    const filePath = path.join(rootDirectory, filepath)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { data } = matter(fileContent)
    return { ...data, slug }
}