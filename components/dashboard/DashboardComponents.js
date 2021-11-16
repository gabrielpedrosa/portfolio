import dashboard from '.';
import dashboardStyle from './Style/dashboard.module.css';

export function Container(props){
    return(
        <div className={dashboardStyle.container}>
            {props.children}
        </div>
    )
}

export function DashboardTitle(props){
    return(
            <div className={dashboardStyle.title}>
                <div className={dashboardStyle.flex}>
                    <h2 className={dashboardStyle.titleName}>{props.title}</h2><h2 className={dashboardStyle.cityName}>{props.city}</h2>
                </div>
                <div className={dashboardStyle.flex}>
                    <h2 className={dashboardStyle.perfil}>Escolha um perfil</h2>
                    <select className={dashboardStyle.perfilSelect}>
                        <option className={dashboardStyle.perfilOption}>Gestão</option>
                        <option className={dashboardStyle.perfilOption}>Operação</option>
                    </select>
                </div>
            </div>

    )
}