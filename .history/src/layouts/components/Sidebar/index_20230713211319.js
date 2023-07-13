import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import { HomeIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={null} />
                <MenuItem title="LIVE" to={config.routes.live} icon={null} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
