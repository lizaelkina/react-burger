import React from 'react';
import burgerConstructorStyles from './burger-constructor.module.css';

export class BurgerConstructor extends React.Component {

  render() {
    return (
        <section className={burgerConstructorStyles.compound}>
          <h1 className='text text_type_main-large mt-10 mb-5'>Конструктор</h1>
        </section>
    );
  }
}
