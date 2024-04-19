import React from 'react'
import { PublicationData } from '../../sample_data/PublicationList'
import Link from 'next/link'

function PublicationsPage() {
  return (
    <div>
      <div className="mb-96">
        <div
          className="bg-gradient-to-tl from-[#00274C] to-[#145089]
            w-full
            h-3/4
            absolute
            overflow-hidden
            -z-20
            snap-start
            top-0
            "
            
        >
        </div>
        <h1 className='text-5xl text-center mb-7 text-white'>Publications</h1>
      </div>
        <ul className='px-14'>
        {PublicationData.map((publication, idx) => 
          <li className='mt-5 border border-b-2 border-t-0 border-x-0 ' key={idx}>
            <div className='grid gap-y-2 grid-cols-12'>
              <p className='col-span-2'>{publication.date}</p>
              <Link href={publication.link} className='col-span-10'>
                <p className='text-lg'>{publication.title}</p>
              </Link>
              
            </div>
            
          </li>
        )}

      </ul>
    </div>
  )
}

export default PublicationsPage
