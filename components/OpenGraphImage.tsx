import React from 'react'

export const width = 1200
export const height = 630

export function OpenGraphImage(props: { title: string }) {
  const { title } = props

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        position: 'relative',
      }}
    >
      <img
        src="/logo.png"
        alt=" Idealistic World Image"
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 60,
          fontStyle: 'normal',
          color: 'black',
          marginTop: -2,
          lineHeight: 2,
          whiteSpace: 'pre-wrap',
        }}
      >
        <b style={{ background: '#fff', borderBottom: '5px solid green' }}>
          {title}
        </b>
      </div>
      <div
        style={{
          display: 'flex',
        }}
      />
    </div>
  )
}
