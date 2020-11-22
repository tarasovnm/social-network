import s from './Dialogs.module.scss';

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <h3 className={s.dialogs__title}>Dialogs</h3>

            <div className={s.dialogs__wrapper}>
                <ul className={s.dialogs__list}>
                    <li className={s.dialog}>Dimych</li>
                    <li className={s.dialog + ' '+ s.active}>Andrey</li>
                    <li className={s.dialog}>Sveta</li>
                    <li className={s.dialog}>Alex</li>
                    <li className={s.dialog}>Victor</li>
                    <li className={s.dialog}>Valera</li>
                </ul>

                <ul className={s.dialogs__messages}>
                    <li className={s.message}>Hi</li>
                    <li className={s.message}>Hi! How are You?</li>
                    <li className={s.message}>Fine! Thanks!</li>
                </ul>
            </div>
        </div>
    );
}

export default Dialogs;