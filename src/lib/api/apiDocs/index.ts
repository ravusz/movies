import ky from 'ky';
import { env } from '@/env';

export const apiDocsApi = ky.create({ prefixUrl: env.NEXT_PUBLIC_SWAPI_URL });