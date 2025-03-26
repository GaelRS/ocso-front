'use client'

import { Select, SelectItem } from "@heroui/react"
import { Location, Manager } from "@/entities"

export default function SelectManager({managers, locations}:{managers: Manager[], locations:Location[]}){
   const disabledKeys = locations.map((location: Location)=>{
      return location.managerId?.managerId
   }).filter((managerId)=>managerId!== undefined )
   return(
      <Select label="Manager" name="managerId" disabledKeys={disabledKeys} >
         {
            managers.map((manager: Manager)=>{
               return(
                  <SelectItem key={manager.managerId}>{manager.managerFullName}</SelectItem>
               )
            })
         }
      </Select>
   )
}