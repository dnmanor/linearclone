import React from 'react'
import styles from '../styles/actions.module.css'

const Actions = () =>{
    return(
        <div className={styles.actionsContainer}>
            <div className={styles.actionsWrapper}>
                <div className={styles.shortcutsContainer}>
                    <div className={styles.commandWrapper}>
                        <span className={styles.command}>⌘</span>
                    </div>
                    <div className={styles.commandWrapper}>
                        <span className={styles.command}>K</span>
                    </div> 
                </div>
                <div className={styles.descriptionContainer}>
                     <h2 className={styles.title}>
                     Meet your command line
                     </h2>
                     <div className={styles.description}>
                     Any action can be accessed and completed in seconds with the command menu.
                     </div>
                </div>
                <div className={styles.gifContainer}>
                    <div className={styles.gifWrapper}>
                        <div className={styles.gradientBg}></div>
                        <div className={styles.gifImageWrapper}>
                            <div className={styles.gifImage}>
                                <img src="/command-menu.gif" alt="command" srcset="" className={styles.gif}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Actions