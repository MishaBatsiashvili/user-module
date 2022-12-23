import React from 'react';
import type { ContainerPropsType } from './Container';
import Container from './Container';

type ContentContainerPropsType = ContainerPropsType & {
   children: React.ReactNode;
};

/*
This is a special version of the container specificaly for the content
*/
const ContentContainer: React.FC<ContentContainerPropsType> = ({
   marginClass = 'mt-12',
   size = 'sm',
   children,
   ...restProps
}) => {
   return (
      <Container marginClass={marginClass} size={size} {...restProps}>
         {children}
      </Container>
   );
};

export default ContentContainer;
