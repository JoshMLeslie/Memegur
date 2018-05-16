import React from 'react';

export default class HeaderEntity extends React.Component {

  makeEntities () {
    let selected = this.props.selectedEntity;

    return this.props.entities.map( (entity, index) => {

      let title = entity.title;
      let klass = '';
      if (index === selected) {
        klass = 'active';
      }

      return (
        <li
          key={index}
          className={klass}
          onClick={this.props.selectEntity.bind(null, index)}>
          {title}{' '}
        </li>
      );
    });
  }


  render () {

    return (
      <ul>
        {this.makeEntities.bind(this)()}
      </ul>
    );
  }
}
