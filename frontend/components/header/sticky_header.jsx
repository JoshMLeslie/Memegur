import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import Header from './header';

const StickyHeader = () => (
  <StickyContainer >
    <Sticky
      wasSticky={true}
      isSticky={true}
      distanceFromTop={0}
      >
      {
        ({
          style,
          wasSticky,
          isSticky,
          distanceFromTop
        }) => ( <Header style={style}/> )
      }
    </Sticky>
  </StickyContainer>
);

export default StickyHeader;
