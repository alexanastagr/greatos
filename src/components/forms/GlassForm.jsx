export default function GlassForm({children,error}){
    return(
        <div className={error ? 'glassform error' : 'glassform'}>
            <div className="container">
            {error && <div className="errormsg error">{error}</div>}
            {children}
            </div>
        </div>
    )
}