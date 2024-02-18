import React, { ReactNode } from 'react';

interface BlogContainerProps {
  children: ReactNode;
}

export default function BlogContainer({ children }: BlogContainerProps) {
  return <div className="container ">{children}</div>;
}