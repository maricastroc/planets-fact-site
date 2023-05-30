import { Routes, Route } from 'react-router-dom'
import { Home } from '../src/pages/Home'
import { Venus } from '../src/pages/Venus'
import { Earth } from '../src/pages/Earth'
import { Mars } from '../src/pages/Mars'
import { Jupiter } from '../src/pages/Jupiter'
import { Saturn } from '../src/pages/Saturn'
import { Uranus } from '../src/pages/Uranus'
import { Neptune } from '../src/pages/Neptune'

import { DefaultLayout } from './layouts/DefaultLayout'

// declaração de quais rotas existem em nossa aplicação.
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/venus" element={<Venus />} />
        <Route path="/earth" element={<Earth />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/jupiter" element={<Jupiter />} />
        <Route path="/saturn" element={<Saturn />} />
        <Route path="/uranus" element={<Uranus />} />
        <Route path="/neptune" element={<Neptune />} />
      </Route>
    </Routes>
  )
}
