import React from 'react';
import cn from 'classnames';
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ConstructorList} from '../constructor-list/constructor-list';
import {OrderDetails} from '../order-details/order-details';
import {ingredientsPropTypes} from '../../utils/prop-types';
import burgerConstructorStyles from './burger-constructor.module.css';

export class BurgerConstructor extends React.Component {
  state = {
    isOpenModal: false,
  };

  handleOpenModal = () => {
    this.setState({isOpenModal: true});
  }

  handleCloseModal = () => {
    this.setState({isOpenModal: false});
  }

  render() {
    let {ingredients} = this.props;

    return (
        <section className={cn(burgerConstructorStyles.section, 'pt-25 pl-3 pb-10')}>
          <ConstructorList ingredients={ingredients}/>
          <div className={cn(burgerConstructorStyles.price, 'mt-10 mr-4')}>
            <div>
              <span className='text text_type_digits-medium mr-4'>610</span>
              <CurrencyIcon type='primary'/>
            </div>
            <Button htmlType='button' type='primary' size='large' onClick={this.handleOpenModal}>
              Оформить заказ
            </Button>
            {this.state.isOpenModal && <OrderDetails onClose={this.handleCloseModal}/>}
          </div>
        </section>
    );
  }
}

BurgerConstructor.propTypes = {
  ingredients: ingredientsPropTypes.isRequired
}
