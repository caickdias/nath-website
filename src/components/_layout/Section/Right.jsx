import { getFlexAlignment } from '../../../helpers/utils';

const Right = ({ 
  flex=1,
  children,
  center=false,
  centerLeft=false,
  centerRight=false,
  topLeft=false,
  topCenter=false,
  topRight=false,
  bottomLeft=false,
  bottomCenter=false,
  bottomRight=false
}) => {

  const properties = { center, centerLeft, centerRight, topLeft, topCenter, topRight, bottomLeft, bottomCenter, bottomRight };

  const flexProps = getFlexAlignment(properties);

  return (
    <div className="flex flex-col"
      style={{flex, ...flexProps}}
    >
        {children}
    </div>
  )
}

export default Right