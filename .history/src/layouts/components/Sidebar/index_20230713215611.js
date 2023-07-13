import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import { HomeActiveIcon, HomeIcon, LiveIcon, UserGroupIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<HomeActiveIcon /> />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
