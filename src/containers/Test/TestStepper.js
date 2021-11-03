import { useState } from 'react';
import { TestContainer } from '../../styles/index';
import Stepper from 'react-simple-stepper-component';
import TestInfo from './TestInfo';
import PartInfo from './PartInfo';
import SectionInfo from './SectionInfo';
import ItemInfo from './ItemInfo';
import Alert from 'react-bootstrap/Alert'

const TestStepper = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [testInfo, setTestInfo] = useState({'title':'', 'time_dependency': false, 'time_limit_seconds': 0})
    const [partInfo, setPartInfo] = useState({'navigation_mode':'LINEAR', 'submission_mode': 'SIMULTANEOUS', 'title': ''})
    const [sectionInfo, setSectionInfo] = useState({'title':'', 'partId': ''})
    const [itemInfo, setItemInfo] = useState({
        'question': '',
        maxChoices: 1,
        sectionId: null,
        partId: null,
        score: 0
    })
    console.log(currentStep)
    const [disabledNextBtn, setDisabledNextBtn] = useState(true);
    console.log(itemInfo)
    const steps = [{ title: 'Test info'}, { title: 'Add part'}, { title: 'Add section'}, { title: 'Add questions' }]
    const onPrevious= () => {
        setCurrentStep(currentStep => currentStep > 0 ? currentStep - 1: 0)
    }

    const onNext= () => {
        setCurrentStep(current => currentStep < 4 ? current + 1: 4)
      }
    return (
        <TestContainer>
          <div style={{marginBottom: '30px'}}>
              <Stepper steps={steps} activeStep={currentStep} />
              <button type="button" disabled={disabledNextBtn} onClick={onNext} className="btn btn-primary position-absolute bottom-0 end-0">
                  Next
              </button>
              <button type="button" onClick={onPrevious} className="btn btn-primary position-absolute bottom-0 start-0">
                  Previous
              </button>
            </div>
            <div>
                {currentStep === 0 && <TestInfo setTestInfo={setTestInfo} testInfo={testInfo} setDisabledNextBtn={setDisabledNextBtn}/>}
                {currentStep === 1 && <PartInfo setPartInfo={setPartInfo} partInfo={partInfo} />}
                {currentStep === 2 && <SectionInfo setSectionInfo={setSectionInfo} sectionInfo={sectionInfo} />}
                {currentStep === 3 && <ItemInfo setItemInfo={setItemInfo} itemInfo={itemInfo} />}
                {currentStep == 4 && (
                     <Alert key={1} variant="success">
                     This is a alert—check it out!
                   </Alert>
                )}
            </div>
        </TestContainer>
    )

}




export default TestStepper;