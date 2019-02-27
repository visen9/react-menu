import React, { useEffect } from 'react';
import Modal from 'components/Modal'
import { fetchMenuRequest } from '../store/actions/fetchMenuAction';
import { connect } from 'react-redux';

const HomePage = ({ fetchMenu }) => {

    useEffect(() => { fetchMenu() }, [])

    return (
        <>
            <h1>HomePage</h1>
        </>)
}

export default connect(null, {
    fetchMenu: fetchMenuRequest
})(HomePage)

