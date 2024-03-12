import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const ROOT_DOMAIN = publicRuntimeConfig.rootDomains;
export const fetcher = (url) => fetch(url).then((res) => res.json());
