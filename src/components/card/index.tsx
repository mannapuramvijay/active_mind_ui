import { map } from 'lodash';
import './card.css';

export default function ContactCard(props: any) {
  return (
    <div className='p-10 card-back rounded-2xl'>
      <h3 className='card-head'>{props.header}</h3>
      <dl className='text-sm'>
        {map(props.content, (content, idx) => <div key={idx}>
          <dt className='card-data'>{content.key}</dt>
          <dd>{content.href ? <a href={content.href}>{content.value}</a> : <>{content.value}</>}</dd>
        </div>)}
      </dl>
    </div>
  )
}
