import { memo } from '../../helpers';
import styles from './styles.scss';

const SystemMessage = memo(({ data }) => (
	<li>
		<div class={styles.container}>
			<div class=''>
				<img src={data.thumbnail} class={styles.imgCover} />
			</div>
			<div class={styles.linkInfor}>
				<p class={styles.title}>{ data.title }</p>
				<p class={styles.price}>{ data.price }</p>
			</div>
		</div>
	</li>

));

export default SystemMessage;
