import React, { useEffect, memo } from 'react';
import Modal from 'components/Modal'
import { fetchMenuRequest } from '../store/actions/fetchMenuAction';
import { connect } from 'react-redux';
import List from 'components/List';
import { addOrder, removeOrder } from '../store/actions/orderAction';
import { NavLink } from 'react-router-dom';

const HomePage = ({ fetchMenu, listMenu, onAddOrder, onRemoveOrder, match, existsOrders }) => {

    useEffect(() => { fetchMenu() }, [])


    return (
        <>
            <h1>HomePage</h1>
            {match.params.idMenu && <Modal idMenu={match.params.idMenu} />}
            {listMenu.length > 0 &&
                <List
                    addEventHandler={onAddOrder}
                    removeEventHandler={onRemoveOrder}
                    items={listMenu} />}
            {existsOrders && <NavLink to="/payment">PAY!</NavLink>}
        </>)
}

const mapStateToProps = (state) => ({
    existsOrders: state.order.length > 0,
    listMenu: state.menu.items
})
export default connect(mapStateToProps, {
    fetchMenu: fetchMenuRequest,
    onAddOrder: addOrder,
    onRemoveOrder: removeOrder
})(HomePage)

