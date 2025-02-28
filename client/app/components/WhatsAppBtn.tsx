

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WhatsAppBtn() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
    <Link href='https://wa.me/8801864977806' target='_blank' >
        <Image src={`/WhatsApp.webp`} width={70} height={70} alt=''  />
    </Link>
    </div>
  )
}
