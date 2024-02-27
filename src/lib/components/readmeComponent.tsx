async function getReadmeContent(): Promise<string> {
  const url =
    'https://raw.githubusercontent.com/Report-Rendezvous/.github/main/profile/README.md'
  return fetch(url).then((response) => response.text())
}

export default async function Readme() {
  const data = await getReadmeContent()
  return <div>{data}</div>
}
