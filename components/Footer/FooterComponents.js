
import footerStyle from './Style/footer.module.css';
import {FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

export default function Footer({ children, ...restProps}){
    return (
        <div className={footerStyle.container} {...restProps}>{children}</div>
    )
}

Footer.Wrapper = function FooterWrapper({children, ...restProps}){
    return <div className={footerStyle.wrapper} {...restProps}>{children}</div>
}

Footer.Row = function FooterRow({children, ...restProps}){
    return <div className={footerStyle.row} {...restProps}>{children}</div>
}
Footer.Column = function FooterColumn({children, ...restProps}){
    return <div className={footerStyle.column} {...restProps}>{children}</div>
}
Footer.Link = function FooterLink({children, ...restProps}){
    return <div className={footerStyle.link} {...restProps}>{children}</div>
}
Footer.Title = function FooterTitle({children, ...restProps}){
    return <div className={footerStyle.title} {...restProps}>{children}</div>
}

Footer.Icon = function FooterIcon({children, icon, ...restProps}){
    return <i className={footerStyle.icon} {...restProps}>{<GetIcon icon={icon}/>}</i>
}

export function GetIcon(props){;
    const iconName = props.icon;

    if(iconName === 'facebook'){
        return <FaFacebookF/>;
    }
    else if(iconName === 'instagram'){
        return <FaInstagram/>
    }else if(iconName === 'linkedin'){
        return <FaLinkedinIn/>
    }else{
        return <FaInstagram/>
    }
}