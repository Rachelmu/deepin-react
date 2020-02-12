import React, { Fragment, useState, useEffect, useContext, useLayoutEffect, useMemo } from 'react'

export const useStateExp = props => {
    const [a, setA] = useState(0)
    
    return (
        <Fragment>
        	<button onClick={() => setA(a + 1)}>
            	{a}
            </button>
        </Fragment>
    )
}

export const useEffectExp = props => {

}


