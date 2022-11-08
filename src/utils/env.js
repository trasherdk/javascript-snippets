// Checks whether current environment is browser or node
export default function getEnv() {
  if (typeof window === 'object') return 'browser'
  if (typeof global === 'object') return 'node'
}
