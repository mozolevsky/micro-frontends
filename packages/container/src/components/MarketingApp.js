import React, {useRef, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import {mount} from 'marketing/MarketingApp'

export default () => {
    const ref = useRef(null)
    const history = useHistory()

    useEffect(() => {
        const {onContainerNavigate} = mount(ref.current, {
            onNavigate: ({pathname: nextPathname}) => {
                const {pathname} = history.location

                if (pathname !== nextPathname) {
                    history.push(nextPathname)
                }
            },
        })

        history.listen(onContainerNavigate)
    }, [])

    return (
        <div ref={ref}></div>
    )
}
