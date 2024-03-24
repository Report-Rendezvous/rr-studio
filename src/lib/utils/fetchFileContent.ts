export async function fetchFileContent(url: string): Promise<string | null> {
  const response = await fetch(url, {
    next: { tags: ['fetchFileContent'] }
  })

  if (response.status !== 200) {
    console.log(`Failed to fetch file content from ${url}`)
    return null
  }

  return response.text()
}
