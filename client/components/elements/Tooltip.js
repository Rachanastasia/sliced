import Tippy from '@tippyjs/react'
import styles from '../../styles/modules/Tooltip.module.css'

export function Tooltip({ text, placement, singleton, children, trigger }) {
  function renderContent() {
    return (
      <div className={styles.tooltip_wrapper}>
        <span className={styles.tooltip_text}>{text}</span>
      </div>
    )
  }
  return (
    <Tippy
      content={renderContent()}
      placement={placement}
      singleton={singleton}
      hideOnClick
      offset={[2, 2]}
    >
      {children}
    </Tippy>
  )
}
