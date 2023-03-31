import { useContext } from "react";
import { NavItem } from "@common/Layout/header/components/nav-item";
import { NavigationContext } from "@common/Layout/header";
import { NavChevron } from "@common/Layout/header/components/nav-chevron";
import cx from "classnames";
import { IMenuItem } from "@common/Layout/header/data";
import { NavText } from "@common/Layout/header/components/nav-text";

export const MenuItem = ({ item }: { item: IMenuItem }) => {
  const {
    currentItem,
    openMenuItem,
    closeMenuItem,
    close,
    intersectDarkContainers,
    isTablet,
  } = useContext(NavigationContext);
  const isCurrentMenuItemOpen = currentItem === item.name;

  const handleItemClick = () => {
    if (!item.children?.length) {
      closeMenuItem();
      close();
    } else {
      if (isCurrentMenuItemOpen) {
        closeMenuItem();
      }

      if (item.children?.length && !isCurrentMenuItemOpen) {
        openMenuItem(item.name);
      }
    }
  };
  const handleClick = () => {
    if (item.children?.length && !isCurrentMenuItemOpen) {
      openMenuItem(item.name);
    }
  };

  const handleMouseEnter = () => {
    if (!isTablet && item.children?.length) {
      openMenuItem(item.name);
    }
  };
  const handleMouseLeave = () => {
    if (!isTablet && item.children?.length && isCurrentMenuItemOpen) {
      closeMenuItem();
    }
  };

  return (
    <NavItem onClick={handleItemClick} onMouseLeave={handleMouseLeave}>
      <a href={item.url}>
        <div
          onMouseEnter={handleMouseEnter}
          className={cx("text-center w-full ", {
            "text-base-gray": isCurrentMenuItemOpen,
            "fill-base-gray": isCurrentMenuItemOpen,
          })}
        >
          <NavText className="md:py-[25px]">{item.name}</NavText>
          {item.children?.length ? (
            <NavChevron isOpen={isCurrentMenuItemOpen} />
          ) : null}
        </div>
      </a>
    </NavItem>
  );
};
