'use client'

import { CreativeCommonsIcon } from '~/components/icons/cc'
import { DividerVertical } from '~/components/ui/divider'
import { mood2icon, weather2icon } from '~/lib/meta-icon'
import { useCurrentNoteDataSelector } from '~/providers/note/CurrentNoteDataProvider'

const dividerVertical = <DividerVertical className="!mx-2 scale-y-50" />

const sectionBlockClassName = 'flex items-center space-x-1 flex-shrink-0'
export const NoteMetaBar = () => {
  return (
    <>
      <NoteMetaWeather />
      <NoteMetaMood />
      <NoteMetaReadCount />
      <NoteMetaLikeCount />
      <NoteMetaCC />
    </>
  )
}

export const NoteMetaWeather = () => {
  const weather = useCurrentNoteDataSelector((data) => data?.data.weather)
  if (!weather) return null
  return (
    <>
      {dividerVertical}
      <span className={sectionBlockClassName} key="weather">
        {weather2icon(weather)}
        <span className="font-medium">{weather}</span>
      </span>
    </>
  )
}

export const NoteMetaMood = () => {
  const mood = useCurrentNoteDataSelector((data) => data?.data.mood)

  if (!mood) return null
  return (
    <>
      {dividerVertical}
      <span className={sectionBlockClassName} key="mood">
        {mood2icon(mood)}
        <span className="font-medium">{mood}</span>
      </span>
    </>
  )
}

export const NoteMetaReadCount = () => {
  const read = useCurrentNoteDataSelector((data) => data?.data.count.read)
  if (!read) return null
  return (
    <>
      {dividerVertical}
      <span className={sectionBlockClassName} key="readcount">
        <i className="icon-[mingcute--book-6-line]" />
        <span className="font-medium">{read}</span>
      </span>
    </>
  )
}

export const NoteMetaLikeCount = () => {
  const like = useCurrentNoteDataSelector((data) => data?.data.count.like)
  if (!like) return null
  return (
    <>
      {dividerVertical}
      <span className={sectionBlockClassName} key="linkcount">
        <i className="icon-[mingcute--heart-line]" />
        <span className="font-medium">{like}</span>
      </span>
    </>
  )
}

export const NoteMetaCC = () => {
  return (
    <>
      {dividerVertical}
      <span className="inline-flex items-center" key="cc">
        <a
          href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
          target="_blank"
          className="inline-flex cursor-pointer items-center text-current"
        >
          <span
            title="创作共用保留署名-非商业-禁止演绎4.0国际许可证"
            className="inline-flex items-center"
          >
            <CreativeCommonsIcon />
          </span>
        </a>
      </span>
    </>
  )
}