import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

const Button = ({ children, asLink = false, type='primary', rounded= false, iconRight, ...moreProps }) => {
    
    let Tag = asLink ? Link : 'button'
    if(moreProps?.href?.includes('http')) {
        Tag = 'a'
    }
    const typeStyle = `btn-${type}`
    const roundedStyle = rounded ? 'btn-rounded' : ''

    let iconR = null
    switch (iconRight) {
        case 'ArrowDown':
            iconR = 
            <img
              src="/images/arrow-down.svg"
              alt="dropdown"
              className='btn-icon-right'
            />
            break;
            default:
                break;
    }
    return (
        <Tag className={cn('btn', typeStyle, roundedStyle)} {...moreProps}>
        {children}
        {iconR}
        </Tag>
    )
}

export default Button