import StarIcon from '@mui/icons-material/Star'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import React from "react"

interface Props {
    star: number
    selected: boolean
    onChange: (star: number) => void
}

const FULL_STAR = 5

const RatingItemFilter: React.FC<Props> = ({ star, selected, onChange }) => {

  return (
      <div className={`hover:text-amber-600 ${selected && 'font-bold'}`} onClick={() => onChange(star)}>
        {Array.from(Array(star).keys()).map((item: number) => (
            <StarIcon key={item} className='text-amber-600' />
        ))}

        {Array.from(Array(FULL_STAR - star).keys()).map((item: number) => (
            <StarOutlineIcon key={item} className='text-amber-600' />
        ))}
          & Up
      </div>
  )
}

export default RatingItemFilter
