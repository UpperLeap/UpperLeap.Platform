import { MDXRemote } from "next-mdx-remote/rsc";

const MdxLayout = ({ source }: { source: string }) => {
  const components = {
    h1: ({ children, ...props }: any) => (
      <h1 className="text-2xl font-bold mt-7 text-foreground" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: any) => (
      <h2 className="text-xl font-bold mt-5 text-foreground" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: any) => (
      <h3 className="text-lg font-bold mt-4 text-foreground" {...props}>
        {children}
      </h3>
    ),
    h4: ({ children, ...props }: any) => (
      <h4 className="text-base font-bold mt-3 text-foreground" {...props}>
        {children}
      </h4>
    ),
    p: ({ children, ...props }: any) => (
      <p className="text-foreground-secondary" {...props}>
        {children}
      </p>
    ),

    a: ({ children, ...props }: any) => (
      <a className="text-primary font-semibold" {...props}>
        {children}
      </a>
    ),
  };

  return <MDXRemote source={source} components={components} />;
};

export default MdxLayout;
