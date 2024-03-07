import { atomWithStorage } from 'jotai/utils'

const session = atomWithStorage('session', 'desktop');

export {session}