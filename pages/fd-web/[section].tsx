import Page, { getStaticProps } from './index';
import { GetStaticPaths } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{ params: { section: 'beurs' } }],
        fallback: false,
    };
};

export { getStaticProps };

export default Page;
