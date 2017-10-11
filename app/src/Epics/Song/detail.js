export function index(id) {
  return fetch(`/song/detail?ids=${id}`)
    .then(res => res.json())
}