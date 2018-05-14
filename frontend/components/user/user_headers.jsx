import React from 'react';

export default class HeaderEntity extends React.Component {
  constructor(props) {
    super(props);

    this.makeEntities = this.makeEntities.bind(this);
  }


  makeEntities () {
    let selected = this.props.selectedEntity;

    return this.props.entities.map( (entity, index) => {
      if (entity.title === "user") return; // skip

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
    const entities = this.makeEntities();
    
    return (
      <ul>
        {entities}
      </ul>
    );
  }
}
